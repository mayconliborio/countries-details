<template>
  <div id="header">
    <div class="content">
      <h1>Where in the world?</h1>
      <div>
        <a  @click="toggleTheme">
          <span v-if="darkMode"> <i class="fas fa-moon"></i> Dark Mode</span>
          <span v-else> <i class="fas fa-sun"> </i> Light Mode</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userTheme: "",
      darkMode: true,
    }
  },
  mounted() {
    const initUserTheme = this.getMediaPreference();
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === 'dark-theme'){
      this.darkMode = false;
    }else{
      this.darkMode = true
    }

    this.setTheme(activeTheme || initUserTheme);
    
  },
  methods : {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },
    toggleTheme() {
      this.darkMode = !this.darkMode
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    }
  }
}
</script>

<style>

#header {
  background-color: var(--background-color-secondary);
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  text-align: center;
  align-items: center;
  width: 70%;
  height: 80px;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
}
</style>