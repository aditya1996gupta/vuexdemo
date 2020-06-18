<template>
  <div>
    <p>{{ $t("message", { name }) }}</p>
    <p>{{ $t("email",{email}) }}</p>
    <p>{{ $t("goodbye") }}</p>
    <button @click="setLocale('en')" class="button">English</button>
    <button @click="setLocale('hn')" class="button">Hindi</button>
    <button @click="setLocale('ma')" class="button">Marathi</button>
  </div>
</template>

<script>
export default {
  name: "HelloI18n",
  data() {
    return {
      name: "peter",
      email: "info@learnsomething"
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    }
  }
};
</script>
