<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ book.name }}
        </div>
        <div class="p-1">
            <strong>Nội dung:</strong>
            {{ book.content }}
        </div>
        <div class="p-1">
            <strong>Nhà xuất bản:</strong>
            {{ book.publisher }}
        </div>
        <div class="p-1">
            <strong>Ngôn ngữ:</strong>
            {{ book.language }}
        </div>
        <div class="p-1">
            <strong>Sách yêu thích:&nbsp;</strong>
            <i v-if="book.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>
