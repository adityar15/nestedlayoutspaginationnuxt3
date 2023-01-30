<template>
    <ul v-if="data?.data">
        <li v-for="user in data.data" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
    <Pagination @change="refetch" :totalPages="data?.total_pages" :currentPage="page" />
</template>

<script setup>

const runtimeConfigs = useRuntimeConfig()
const page = ref(1)

const {data, pending, refresh} = await useFetch(()=>`${runtimeConfigs.public.API_URL}/users?page=${page.value}`, {
    key: `userlist-${page.value}`,
})

function refetch(pageNumber){
    page.value = pageNumber
    refresh()
}

</script>

