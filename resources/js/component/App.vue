<template>
    <Layout1 :authenticated="authenticated">
        <div class="h-screen w-screen flex items-center justify-center">
            <div class="shadow-lg p-5 rounded-xl">
                <Edit @success="editSuccess" v-if="isEdit" :id="editId" />
                <Form @success="getter" v-else />

                <div v-if="!isPending">
                    <Table :students="students" @editStudent="editStudent" />
                </div>
            </div>
        </div>
    </Layout1>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import axios from "axios";
import Form from "./Form.vue";
import Table from "./Table.vue";
import Edit from "./Edit.vue";
import { useGetStudents } from "../QueryStore/Students/useGetStudents";
import Layout1 from "../Layout/Layout.vue";

const { isPending, data: students } = useGetStudents();
const authenticated = ref(false);
const isEdit = ref(false);
const editId = ref(0);

function editStudent(id) {
    editId.value = id;
    isEdit.value = true;
}

function editSuccess() {
    editId.value = 0;
    isEdit.value = false;
    getter();
}

async function checkAuth() {
    try {
        const response = await axios.get("/checkUser");
        authenticated.value = response.data;
        if (!authenticated.value) {
            this.$router.push("/login");
        }
    } catch (error) {
        console.error("Error checking auth:", error);
        authenticated.value = false;
        this.$router.push("/login");
    }
}

onMounted(() => {
    checkAuth();
});

watch(authenticated, (newValue) => {
    if (!newValue) {
        this.$router.push("/login");
    }
});
</script>

<style scoped></style>
