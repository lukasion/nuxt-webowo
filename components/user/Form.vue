<script setup>
const form = ref({
    name: '',
    email: '',
    password: '',
})

const onSubmit = () => {
    console.log('test')
}
</script>

<template>
    <el-row justify="center">
        <el-col :span="8">
            <el-form :model="form" label-width="120px">
                <el-form-item label="Login">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="E-mail">
                    <el-input v-model="form.email" />
                </el-form-item>

                <el-form-item label="Hasło">
                    <el-input v-model="form.password" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Załóż konto</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>