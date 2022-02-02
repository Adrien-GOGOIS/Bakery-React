import React from "react";
import Button from "./Button.js";
import Save from "./Save.js";

import Card from "./Card.js";

// Onglet Pay
class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
      reset: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.resetBasket = this.resetBasket.bind(this);
  }

  // ICI ON VA CALCULER LE TOTAL DES PRODUITS APRES AJOUT DANS LE PANIER
  componentDidUpdate(_prevProps, prevState) {
    console.log(this.state.reset);
    if (this.state.reset === true) {
      this.setState({
        basket: [],
        total: 0,
        totalTVA: 0,
        totalEcoTax: 0,
        totalTTC: 0,
        reset: false,
      });
    } else if (
      prevState.basket !== this.state.basket &&
      prevState.reset === false
    ) {
      // Stockage des calcul dans des constantes arrondies à 2 décimales
      const actualPrice = parseInt(this.state.basket[0].price);
      const totalPrice = prevState.total + actualPrice;
      const tvaPrice =
        Math.round((prevState.totalTVA + actualPrice / 5) * 100) / 100;
      const ecoPrice = Math.round(this.state.basket.length * 0.03 * 100) / 100;
      const ttcPrice =
        Math.round((totalPrice + tvaPrice + ecoPrice) * 100) / 100;

      console.log(this.state.basket[0].price);

      // Modification du state avec les constantes
      this.setState({
        // ...this.state.basket,
        total: totalPrice,
        totalTVA: tvaPrice,
        totalEcoTax: ecoPrice,
        totalTTC: ttcPrice,
      });
    }
  }

  // Fonction de récupération des caractéristiques (nom/prix) du produit ajouté au panier
  handleSelect(name, price) {
    console.log(name, price);
    this.setState((prevState) => ({
      basket: [{ name: name, price: price }, ...prevState.basket],
    }));
    console.log(this.state.basket);
  }

  // Fonction de reset du panier (state)
  resetBasket() {
    console.log("resetBasket");
    this.setState({
      reset: true,
    });
  }

  // Fonction de sauvegarde du panier (state)
  // saveState() {
  //   const savingState = this.state.basket;
  //   return savingState;
  // }

  // RENDER DU COMPONENT PAY
  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Button
            isSelected={false}
            onClick={this.props.selectAdd}
            children="Add"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectList}
            children="List"
          />
          <Button
            isSelected={true}
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
          <h2>PAY</h2>

          <div className="d-flex flex-row mt-2 mb-5">
            {/* Bouton clear : */}

            <button className="btn btn-warning m-2" onClick={this.resetBasket}>
              Clear basket
            </button>

            {/* Boutton Save */}

            <button className="btn btn-info m-2" onClick={this.saveState}>
              Save basket
            </button>
          </div>

          {/* Affichage des objets dans le panier : */}
          <div>
            {this.state.basket.map((item) => (
              <p className="me-1 badge bg-primary text-wrap">{item.name} x 1</p>
            ))}
          </div>

          <div>
            <p>Total : {this.state.total} €</p>
            <p>TVA : {this.state.totalTVA} €</p>
            <p>Eco Taxe : {this.state.totalEcoTax} €</p>
            <p>Total TTC : {this.state.totalTTC} €</p>
          </div>
          <div className="row">
            {this.props.productList.map((item) => {
              return (
                <Card
                  productName={item.productName}
                  price={item.productPrice}
                  onClick={() =>
                    this.handleSelect(item.productName, item.productPrice)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
