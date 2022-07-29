const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const options = wrapper.querySelector(".options");
const searchInp = wrapper.querySelector("input");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladash", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Maldives",
                "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan", "Peru", "Russia",
                "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey",
                "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(){
    options.innerHTML = "";
    countries.forEach(country => {
        let li = `<li onclick="updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}
addCountry();

function updateName(selectedLi){
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
    wrapper.classList.remove("active");
    searchInp.value = "";
    addCountry();
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();

    //returning all countries from array which are start with user searched value
    //and mapping returned country with li and joining them
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal); 
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");

    options.innerHTML = arr ? arr : `<p>Oops! ${searchedVal} not found</p>`;
})

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})