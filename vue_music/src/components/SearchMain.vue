<template>
  <form action="/">
    <van-search v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"/>
  </form>
</template>

<script>
import { Search } from 'vant';
export default {
  nane: "SearchMain",
  data () {
    return {
      value: ""
    }
  },
  components: {
    [Search.name]: Search
  },
  methods: {
    onSearch () {

    },
    onCancel () {
      this.$router.go(-1);
    }
  },
}
</script>
