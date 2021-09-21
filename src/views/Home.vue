<template>
  <div id="countries">
    <ul>
      <li v-for="(country, index) in countries" :key="index">
        <CountryCard />
      </li>
    </ul>
  </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";

export default {
  components: { CountryCard },
  name: "Home",
  data() {
    return {
      countries: [
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
        {
          flag: "https://restcountries.eu/data/bra.svg",
          nativeName: "Brazil",
          population: "206.999.999",
          region: "Americas",
          subRegion: "America do Sul",
          capital: "Brasília",
          topLevelDomain: [".com.br"],
          currencies: [
            { code: "REAL", name: "REAL BRAZILEIRO", symbol: "R$$$$" },
          ],
          languages: [
            {
              iso639_1: "ptss",
              iso639_2: "PORTUGAS",
              name: "Portuguese",
              nativeName: "Portugueesse",
            },
          ],
          borders: [
            "ARG",
            "BOL",
            "COL",
            "GUF",
            "GUY",
            "PRY",
            "PER",
            "SUR",
            "URY",
            "VEN",
          ],
        },
      ],
    };
  },
};
</script>

<style>
#countries {
  display: flex;
  justify-content: center;
  width: 100%;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 70%;
}
li {
  padding: 1px;
}
</style>