<template>
  <div id="card">
    <div class="flag">
      <img :src="country.flag" alt="Bandeira do Brasil">
    </div>
    <div class="text-content">
      <h1>{{ country.nativeName }}</h1>
      <p>Population: <span>{{ country.population }}</span></p>
      <p>Region: <span>{{ country.region }}</span></p>
      <p>Capital: <span>{{ country.capital }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'countryCard',
  data () {
    return {
      country: {
        flag: 'https://restcountries.eu/data/bra.svg',
        nativeName: 'Brazil',
        population: '206.999.999',
        region: 'Americas',
        subRegion: 'America do Sul',
        capital: 'Brasília',
        topLevelDomain: ['.com.br'],
        currencies: [{code: 'REAL', name: 'REAL BRAZILEIRO', symbol: 'R$$$$'}],
        languages: [{iso639_1: 'ptss', iso639_2: 'PORTUGAS', name: 'Portuguese', nativeName: 'Portugueesse'}],
        borders: ['ARG', 'BOL', 'COL', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN']
      }
    }
  }
}
</script>

<style scoped>
#card {
  margin: 29px 27px;
  border-radius: 8px;
  background-color: var(--background-color-secondary);
  width: 210px;
  height: 270px;
  overflow: hidden;
}
.flag{
  border-radius: 5px;
  width: 100%;
  height: 147px;
}

.text-content{
  margin-left: 15px;
}

h1{
  margin-top: 15px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
}

p{
  font-size: 12px;
  font-weight: 600;
}

span{
  font-weight: 300;
}
</style>
