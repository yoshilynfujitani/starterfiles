<template>
    <div class="">
        <form @submit.prevent="submitStudent">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Name</label
                    >
                    <input
                        v-model="name"
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Student Name"
                        required
                    />
                </div>
                <div>
                    <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Course</label
                    >
                    <input
                        v-model="course"
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Course"
                        required
                    />
                </div>
            </div>
            <button
                :disabled="isPending"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAddStudent } from "../QueryStore/Students/useAddStudent";

const { addStudent, isPending } = useAddStudent();
const name = ref("");
const course = ref("");

function submitStudent() {
    addStudent({ name: name.value, course: course.value });
    name.value = "";
    course.value = "";
}
</script>
