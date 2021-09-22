<template>
	<div id="country-screen">
		<div class="container">
			<div class="first-line">
				<div class="button">
					<i class="fas fa-long-arrow-alt-left"></i>
					<span>Voltar</span>
				</div>
			</div>

			<div class="second-line">
				<div class="coluna1">
					<img height="300px" :src="country.flag" />
				</div>
				<div class="coluna2">
					<h1>{{ country.name }}</h1>
					<div class="text-content">
						<div class="text-column1">
							<p>
								Native Name:
								<span>{{ country.nativeName }}</span>
							</p>
							<p>
								Population:
								<span>{{ country.population }}</span>
							</p>
							<p>
								Region: <span>{{ country.region }}</span>
							</p>
							<p>
								Sub Region: <span>{{ country.subRegion }}</span>
							</p>
							<p>
								Capital: <span>{{ country.capital }}</span>
							</p>
						</div>

						<div class="text-column2">
							<p>
								Top Level Domain:
								<span
									v-for="(
										domain, index
									) in country.topLevelDomain"
									:key="index"
									>{{ domain + " " }}</span
								>
							</p>
							<p>
								Currencies:
								<span
									v-for="(
										currency, index
									) in country.currencies"
									:key="index"
									>{{ currency.code }}</span
								>
							</p>
							<p>
								Language:
								<span
									v-for="(
										language, index
									) in country.languages"
									:key="index"
									>{{ language.name }}</span
								>
							</p>
						</div>
					</div>
					<div id="borders-buttons">
							<p>	Border Countries: </p>
								<div class="button"
									v-for="(
										border, index
									) in country.borders"
									:key="index"
									> <span>{{ border }} </span></div>	
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CountryScreen",
	data() {
		return {
			country: {
				flag: "https://restcountries.eu/data/bra.svg",
				name: "Brazil",
				nativeName: "Brasil",
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
		};
	},
};
</script>

<style scoped>
#country-screen {
	display: flex;
	justify-content: center;
}

.container {
	width: 70%;
}

.first-line {
	margin-top: 60px;
}

.text-content {
	display: flex;
	margin-bottom: 20px;
}

.text-column2 {
	padding-left: 60px;
}

#borders-buttons{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}

#borders-buttons .button{
	margin: 5px;
}

.second-line {
	display: flex;
	margin-top: 60px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	height: 430px;
}

h1{
	margin-bottom: 30px;
  font-size: 22px;
  font-weight: 800;
}

p{
  font-size: 16px;
  font-weight: 600;
	margin: 6px 0;
}

span{
	font-size: 16px;
  font-weight: 300;
}

.coluna1,
.coluna2 {
	display: flex;
	width: 45%;
	max-height: 430px;
}

.coluna2 {
	flex-direction: column;
}

.button {
	width: 110px;
	height: 35px;
	background-color: var(--background-color-secondary);
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
}

.button i {
	padding-right: 10px;
}
</style>
