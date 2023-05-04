<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý sách</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'mylibrary' }" class="nav-link">
                    Sách
                    <i class="fas fa-book-reader"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>
