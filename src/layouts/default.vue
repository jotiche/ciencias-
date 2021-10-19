<template>
  <div class="default-layout table-responsive">
    <SiteNavbar class="mb-3"></SiteNavbar>
    <b-container fluid="lg" class="mt-5">
          <SiteContent></SiteContent>
    </b-container>
  </div>
</template>
<script>
import SiteContent from "./components/siteContent.vue";
import SiteNavbar from "./components/siteNavbar.vue";
export default {
  name: "DefaultLayout",
  components: {
    SiteContent,
    SiteNavbar,
  },
};
</script>
