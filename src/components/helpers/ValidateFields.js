// Reg expressions
const regExpProductName = /^[A-Za-z\s?]+$/;
const regExpPrice = /[0-9]+$/;
const regExpUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const regExpCategory = /^[A-Za-z\-\s?]+$/;

// Functions to validate
export const validateProductName = (field) => {
  if (regExpProductName.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validatePrice = (field) => {
  if (
    regExpPrice.test(field) &&
    field.trim() !== "" &&
    field.trim() > 0 &&
    field.trim() < 2000
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateUrl = (field) => {
  if (regExpUrl.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateCategory = (field) => {
  if (
    regExpCategory.test(field) &&
    field.trim() !== "" &&
    (field === "bebida-caliente" ||
      field === "bebida-fria" ||
      field === "sandwitch" ||
      field === "dulce" ||
      field === "salado")
  ) {
    return true;
  } else {
    return false;
  }
};
