const lengthField = document.getElementById("length");
const widthField = document.getElementById("width");
const perimeterField = document.getElementById("perimeter");
const areaField = document.getElementById("area");
const priceBaguetteField = document.getElementById("priceBaguette");
const costBaguette1 = document.getElementById("costBaguette1");
const costBaguette2 = document.getElementById("costBaguette2");
const glassField = document.getElementById("typeGlass");
const priceGlassField = document.getElementById("priceGlass");
const costGlass1 = document.getElementById("costGlass1");
const costGlass2 = document.getElementById("costGlass2");
const mdfField = document.getElementById("typeMDF");
const priceMDFField = document.getElementById("priceMDF");
const costMDF1 = document.getElementById("costMDF1");
const costMDF2 = document.getElementById("costMDF2");
const workField = document.getElementById("typeWork");
const priceWorkField = document.getElementById("priceWork");
const costWork1 = document.getElementById("costWork1");
const costWork2 = document.getElementById("costWork2");
const hangerField = document.getElementById("typeHanger");
const priceHangerField = document.getElementById("priceHanger");
const costHanger1 = document.getElementById("costHanger1");
const costHanger2 = document.getElementById("costHanger2");
const together = document.getElementById("costTogether");


lengthField.addEventListener("input", calculateSum);
widthField.addEventListener("input", calculateSum);
priceBaguetteField.addEventListener("input", calculateSum);
glassField.addEventListener("input", calculateSum);
mdfField.addEventListener("input", calculateSum);
workField.addEventListener("input", calculateSum);
hangerField.addEventListener("input", calculateSum);

function calculateSum() {
  const length = lengthField.valueAsNumber;
  const width = widthField.valueAsNumber;
  const priceBaguette = priceBaguetteField.valueAsNumber;
  const valuePerimeter = (length + width) * 2 / 100;
  const valueArea = length / 100 * width / 100;
  const valueCostBaguette1 = valuePerimeter ? valuePerimeter * priceBaguette : "";
  
  perimeterField.textContent = valuePerimeter ? valuePerimeter : "";
  areaField.textContent = valueArea ? valueArea.toFixed(4) : "";
  costBaguette1.textContent = valueCostBaguette1 ? valueCostBaguette1.toFixed(2) : "";
  costBaguette2.textContent = valueCostBaguette1 ? (valueCostBaguette1 * 1.1).toFixed(2) : "";
  priceGlassField.textContent = glassField.value;
  costGlass1.textContent = valueArea ? (valueArea * glassField.value).toFixed(2) : "";
  costGlass2.textContent = valueArea ? (valueArea * glassField.value * 1.1).toFixed(2) : "";
  priceMDFField.textContent = mdfField.value;
  costMDF1.textContent = valueArea ? (valueArea * mdfField.value).toFixed(2) : "";
  costMDF2.textContent = valueArea ? (valueArea * mdfField.value * 1.1).toFixed(2) : "";
  priceWorkField.textContent = workField.value;
  costWork1.textContent = workField.value ? workField.value : "";
  costWork2.textContent = workField ? (workField.value * 1.1).toFixed(2) : "";
  priceHangerField.textContent = hangerField.value;
  costHanger1.textContent = hangerField ? hangerField.value : "";
  costHanger2.textContent = hangerField ? (hangerField.value * 1.1).toFixed(2) : "";
  together.textContent = (valueCostBaguette1 * 1.1 + valueArea * glassField.value * 1.1 + valueArea * mdfField.value * 1.1 + workField.value * 1.1 + hangerField.value * 1.1).toFixed(2);
}

