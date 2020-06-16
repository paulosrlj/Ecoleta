function populateUFs() {
    const ufSelect = document.querySelector('select[name=uf]')

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value>Selecione a cidade</option>'
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        })

}


document.querySelector("select[name=uf]")
    .addEventListener('change', getCities)

// Itens de coleta
// Pegar todos os li´s

const itemsToCollect = document.querySelectorAll('.items-grid li')

for (const item of itemsToCollect)
    item.addEventListener('click', handleSelectedItem)

const collectedItems = document.querySelector('input[name=items]')


let selectedItems = []

function handleSelectedItem(event) {
    //console.log(event.target.dataset.id)

    const itemLi = event.target

    //Adicionar ou remover uma classe com javascript
    //Toggle adiciona ou remove a classe dependendo se ela existe ou não
    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id



    //Verificar se existem itens selecionados, se sim
    // pegar os items selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        return item === itemId
    })

    //Se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            return item !== itemId
        })

        selectedItems = filteredItems
    } else {
        //Se não estiver selecionado
        //Adiciona à seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os items selecionados
    collectedItems.value = selectedItems
}