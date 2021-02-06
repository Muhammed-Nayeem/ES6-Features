fetch(`https://restcountries.eu/rest/v2/all`)
  .then((res) => res.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countryMainDiv = document.getElementById(`country-list`);
  countries.forEach((country) => {
    const countryDiv = document.createElement(`div`);
    countryDiv.className = `country`;
    //Alternate Way:
    const countryInfo = `
    <h3 class="country-name">${country.name}</h3>
    <p class="country-capital">${country.capital}</p>
    <button onclick="displayCountryInformation('${country.name}')">Show Details</button>
    `;
    countryDiv.innerHTML = countryInfo;
    countryMainDiv.appendChild(countryDiv);
  });
};

const displayCountryInformation = (Name) => {
  const url = `https://restcountries.eu/rest/v2/name/${Name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => countryDetail(data[0]));
};
const countryDetail = (Country) => {
  const countryDetails = document.getElementById(`countryDetails`);
  countryDetails.innerHTML = `
  <h4>Country Name: ${Country.name}</h4>
  <p>Country Region: ${Country.region}</p>
  <p>Country Alpha3Code: ${Country.alpha3Code}</p>
  <p>Country CallingCode: ${Country.callingCodes}</p>
  <p>Country Population: ${Country.population}</P>
  <p>Country TimeZone: ${Country.timezones}</p>
  <p>Country Area: ${Country.area}</p>
  <img src=${Country.flag}>
  `;
};
