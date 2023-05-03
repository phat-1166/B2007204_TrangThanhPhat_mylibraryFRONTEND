<template>
    <div v-if="book" class="page">
        <h4>Thêm Sách</h4>
        <BookForm :book="book" @submit:book="addBook" />

        <p>{{ message }}</p>
    </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";
export default {
    components: { BookForm },
    props: { id: { type: String, required: true } },
    data() {
        return {
            book: { name: "", content: "", publisher: "", language: "" },
            message: "",
        };
    },
    methods: {
        async addBook(data) {
            try {
                await BookService.create(data);
                this.message = "Sách được thêm thành công";
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = "";
    },
};
</script>
