<template>
    <Layout :authenticated="this.authenticated">
        <div class="h-screen w- screen flex items-center justify-center">
            <div class="shadow-lg p-5 rounded-xl">
                <Edit @success="editSuccess" v-if="is_Edit" :id="editId" />
                <Form @success="getter" v-else />

                <Table
                    :students="students"
                    @editStudent="editStudent"
                    @success="getter"
                />
            </div>
        </div>
    </Layout>
</template>

<script>
import Form from "./Form.vue";
import Table from "./Table.vue";
import Edit from "./Edit.vue";

import Message from "./Message.vue";

import Layout1 from "../Layout/Layout1.vue";

export default {
    components: {
        Form,
        Table,
        Edit,
        Message,
        Layout1,
    },
    data() {
        return {
            count: 0,
            countTen: 10,
            students: [],
            is_Edit: false,
            editId: 0,
            authenticated: 0,
        };
    },
    methods: {
        countPlusOne() {
            this.count += 1;
        },
        countMinusOne() {
            this.count -= 1;
        },
        countNuts() {
            this.nuts = 0;
        },
        getter() {
            axios.get("/get-students").then(({ data }) => {
                console.log(data);
                this.students = data;
            });
        },
        editStudent(id) {
            this.editId = id;
            this.is_Edit = true;
        },
        editSuccess() {
            this.editId = 0;
            this.is_Edit = false;

            this.getter();
        },
        checkAuth() {
            axios.get("/checkUser").then(({ data }) => {
                console.log(data);
                this.authenticated = data;
                console.log(this.authenticated);
                if (this.authenticated == 0) {
                    this.$router.push("/login");
                }
            });
        },
    },
    computed: {
        countPlusTen() {
            return this.countTen + this.count;
        },
    },
    mounted() {
        this.getter();
        this.checkAuth();
    },
    watch: {
        authenticated(newValue) {
            if (!newValue) {
                this.$router.push("/login");
            }
        },
    },
};
</script>
