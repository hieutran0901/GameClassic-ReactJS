import React, { createContext, useReducer, useEffect } from 'react';
import products from '../assets/fake-data/products';
import { productsReducer } from '../reducer/productsReducer';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [productsState, dispath] = useReducer(productsReducer, {
    correctAnswer: null,
    listWrongAnswer: [],
    products,
  });

  const randomIndex = Math.floor(Math.random() * products.length);

  useEffect(() => {
    dispath({ type: 'SET_PRODUCTS', payload: products[randomIndex] });
  }, []);

  const onSubmit = (value) => {
    const checkStatusBg = (correctAnswer, answer) => {
      if (correctAnswer.length === 1 && answer.length === 1) {
        if (correctAnswer[0] === answer[0]) return 2;
      } else if (correctAnswer.length === 1 && answer.length !== 1) {
        const index = answer.findIndex((item) => correctAnswer[0] === item);
        if (index !== -1) return true;
      } else if (correctAnswer.length !== 1 && answer.length === 1) {
        const index = correctAnswer.findIndex((item) => answer[0] === item);
        if (index !== -1) return true;
      } else {
        for (let correIndex in correctAnswer) {
          for (let ansIndex in answer) {
            if (answer[ansIndex] === correctAnswer[correIndex]) return true;
          }
        }
      }
      return false;
    };

    if (value) {
      const index = products.findIndex((product) => value === product.name);
      const setBgStatus = {
        gender: 'Success',
        positions: 'Success',
        species: 'Success',
        mana: 'Success',
        resource: 'Success',
        rangeType: 'Success',
        regions: 'Success',
        releaseYear: 'Success',
      };

      if (productsState.listWrongAnswer.find((item) => item.name === value) || index === -1)
        //check value does not exist
        return;
      else {
        let checkWin = true;
        if (productsState.correctAnswer.name !== value) {
          // console.log(checkStatusBg(productsState.correctAnswer.species, products[index].species))
          if (checkStatusBg(productsState.correctAnswer.gender, products[index].gender) !== 2) {
            if (!checkStatusBg(productsState.correctAnswer.gender, products[index].gender)) {
              checkWin = false;
              setBgStatus.gender = 'Danger';
            } else {
              setBgStatus.gender = 'Normal';
            }
          }

          if (checkStatusBg(productsState.correctAnswer.positions, products[index].positions) !== 2) {
            checkWin = false;
            if (!checkStatusBg(productsState.correctAnswer.positions, products[index].positions)) {
              setBgStatus.positions = 'Danger';
            } else {
              setBgStatus.positions = 'Normal';
            }
          }

          if (checkStatusBg(productsState.correctAnswer.species, products[index].species) !== 2) {
            checkWin = false;
            if (!checkStatusBg(productsState.correctAnswer.species, products[index].species)) {
              setBgStatus.species = 'Danger';
            } else {
              setBgStatus.species = 'Normal';
            }
          }

          if (checkStatusBg(productsState.correctAnswer.resource, products[index].resource) !== 2) {
            checkWin = false;
            if (!checkStatusBg(productsState.correctAnswer.resource, products[index].resource)) {
              setBgStatus.resource = 'Danger';
            } else {
              setBgStatus.resource = 'Normal';
            }
          }

          if (checkStatusBg(productsState.correctAnswer.rangeType, products[index].rangeType) !== 2) {
            checkWin = false;
            if (!checkStatusBg(productsState.correctAnswer.rangeType, products[index].rangeType)) {
              setBgStatus.rangeType = 'Danger';
            } else {
              setBgStatus.rangeType = 'Normal';
            }
          }

          if (checkStatusBg(productsState.correctAnswer.regions, products[index].regions) !== 2) {
            checkWin = false;
            if (!checkStatusBg(productsState.correctAnswer.regions, products[index].regions)) {
              setBgStatus.regions = 'Danger';
            } else {
              setBgStatus.regions = 'Normal';
            }
          }

          if (productsState.products[index].releaseYear !== productsState.correctAnswer.releaseYear) {
            checkWin = false;
            if (productsState.products[index].releaseYear < productsState.correctAnswer.releaseYear) {
              setBgStatus.releaseYear = 'Danger-Up';
            } else {
              setBgStatus.releaseYear = 'Danger-Down';
            }
          }
        }
        dispath({
          type: 'ADD_WRONG_ANSWER',
          payload: { ...products[index], setBgStatus },
        });

        if (checkWin) {
          setTimeout(() => {
            alert('Congratulations !!! ');
            dispath({
              type: 'REFRESH_PRODUCTS',
              payload: products[randomIndex],
            });
          }, 5000);
        }
        // checkStatusBg(productsState.correctAnswer.positions, products[index].positions) ? setBgStatus([...bgStatus, {...dataBgStatus,positions: 'Success'}]) : setBgStatus([...bgStatus, {...dataBgStatus,positions: 'Danger'}])
      }
    }
  };

  const productsContextData = { productsState, onSubmit };

  return <ProductsContext.Provider value={productsContextData}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
