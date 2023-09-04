<script lang="ts" setup>
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">

            <el-menu-item index="0">Webowo</el-menu-item>

            <div class="flex-grow" />

            <el-menu-item index="1">Strona główna</el-menu-item>

            <el-sub-menu index="2">
                <template #title>Workspace</template>

                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>

            </el-sub-menu>
        </el-menu>
    </header>
</template>