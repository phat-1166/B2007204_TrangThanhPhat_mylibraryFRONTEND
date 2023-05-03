<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema">
        <div class="form-group">
            <label for="name">Tên sách</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="bookLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="content">Nội dung</label>
            <Field
                name="content"
                type="text"
                class="form-control"
                v-model="bookLocal.content"
            />
            <ErrorMessage name="content" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="publisher">Nhà xuất bản</label>
            <Field
                name="publisher"
                type="text"
                class="form-control"
                v-model="bookLocal.publisher"
            />
            <ErrorMessage name="publisher" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="language">Ngôn ngữ</label>
            <Field
                name="language"
                type="text"
                class="form-control"
                v-model="bookLocal.language"
            />
            <ErrorMessage name="language" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input
                name="favorite"
                type="checkbox"
                class="form-check-input"
                v-model="bookLocal.favorite"
            />
            <label for="favorite" class="form-check-label">
                <strong>Sách yêu thích</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="bookLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteBook"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true },
    },
    data() {
        const bookFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            content: yup.string(),
            publisher: yup.string().max(100, "Tên NXB có tối đa 100 ký tự."),
            language: yup.string(),
        });
        return {
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
