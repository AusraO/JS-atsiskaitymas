export default class CarCards {
    constructor(brand, models) {
        this.brand = brand;
        this.models = models
        return this.render();
    }
    render() {
        this.boxDiv = document.createElement('div');
        this.boxDiv.classList.add('carBox')

        this.brandName = document.createElement('h1');
        this.brandNameText = document.createTextNode(this.brand);
        this.brandName.appendChild(this.brandNameText);

        this.brandModels = document.createElement('p');
        this.brandModelsText = document.createTextNode(this.models);
        this.brandModels.appendChild(this.brandModelsText);

        this.boxDiv.append(this.brandName, this.brandModels);

        return this.boxDiv;
    }
}