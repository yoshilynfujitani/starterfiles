export async function getAllStudents() {
    try {
        const response = await axios.get("/get-students");
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
}

export async function addStudent({ name, course }) {
    try {
        const response = axios.post("/submit-student", { name, course });
        return response;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
}
