import React from "react";
import Button from "./Button.js";

let updateRange = 0;

// Onglet Add
class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      price: 1,
      clicked: false,
    };

    this.updatePrice = this.updatePrice.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
  }

  // Méthode pour récupérer les valeurs des input produit et prix et les stocker dans le state
  updateProductName(e) {
    console.log(e.target.value);
    if (e.target.value !== "") {
      this.setState({
        productName: e.target.value,
        // On remet ici le state à false pour effacer le message précédent d'ajout en dessous du bouton Add
        clicked: false,
      });
    }

    // console.log("productName", this.state.productName);
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });

    updateRange = e.target.value;
    // console.log("price", this.state.price);
  }

  addProduct(e) {
    e.preventDefault();
    if (this.state.productName !== "") {
      this.props.addItem(this.state.productName, this.state.price);
    }

    // CHANGEMENT DU STATE POUR AFFICHER UN MESSAGE EN DESSOUS DU BOUTON
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Button
            isSelected={true}
            onClick={this.props.selectAdd}
            children="Add"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectList}
            children="List"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectPay}
            children="Pay"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectSave}
            children="Save"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2 className="mt-2">ADD</h2>
          {/* Formulaire pour récupérer les articles et leur paramètres*/}
          <div>
            <form className="m-2">
              <input
                className="mt-2 mb-2 w-100"
                type="text"
                onChange={this.updateProductName}
              />
              <br />
              <input
                type="range"
                // value="5"
                min={1}
                max={10}
                // step="1"
                onChange={this.updatePrice}
                className="mt-2 mb-2 w-100"
              />

              <datalist>
                <option value="0" label="0€"></option>
                <option value="5" label="5€"></option>
                <option value="10" label="10€"></option>
              </datalist>

              <p className="mt-2 mb-2 text-center">{updateRange + " €"}</p>
              <button
                type="submit"
                onClick={(e) => this.addProduct(e)}
                className="btn btn-success w-100 mt-2 mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Ici render conditionnel lorsque le bouton Add est cliqué pour confirmer la prise en compte de l'artcile ajouté */}
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <ul className="list-group mt-2 w-25">
            {this.state.clicked && this.state.productName !== "" ? (
              <li className="list-group-item text-center">
                You just add{" "}
                <span className="fw-bold">{this.state.productName}</span> at{" "}
                <span className="fw-bold">{this.state.price}€</span> to list !
              </li>
            ) : (
              <li className="list-group-item text-center is-invalid">
                Add a valid product and click on submit bouton
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Add;
