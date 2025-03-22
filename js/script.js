const lengthField = document.getElementById("length");
const widthField = document.getElementById("width");
const perimeterField = document.getElementById("perimeter");
const areaField = document.getElementById("area");
const priceBaguetteField = document.getElementById("priceBaguette");
const priceСornersField = document.getElementById("priceСorner");
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
priceСornersField.addEventListener("input", calculateSum);
glassField.addEventListener("input", calculateSum);
mdfField.addEventListener("input", calculateSum);
workField.addEventListener("input", calculateSum);
hangerField.addEventListener("input", calculateSum);

calculateSum();

function calculateSum() {
  const length = lengthField.valueAsNumber; // Початкове значення NaN
  const width = widthField.valueAsNumber; // Початкове значення NaN
  const priceBaguette = priceBaguetteField.valueAsNumber; // Початкове значення NaN
  const priceСorner = priceСornersField.valueAsNumber; // Початкове значення NaN
  
  const perimeter = (length + width) * 2 / 100; // Початкове значення NaN
  perimeterField.textContent = perimeter ? perimeter.toFixed(2) : "";
  
  const area = length / 100 * width / 100; // Початкове значення NaN
  areaField.textContent = area ? area.toFixed(4) : "";
  
  const valueCostBaguette1 = perimeter && priceBaguette ? perimeter * priceBaguette + (priceСorner || 0) : 0;
  costBaguette1.textContent = valueCostBaguette1 ? valueCostBaguette1.toFixed(2) : "";
  const valueCostBaguette2 = valueCostBaguette1 ? valueCostBaguette1 * 1.1 : 0;
  costBaguette2.textContent = valueCostBaguette2 ? valueCostBaguette2.toFixed(2) : "";
  priceGlassField.textContent = glassField.value;
  const valueCostGlass1 = area && glassField.value ? area * Number(glassField.value) : 0;
  costGlass1.textContent = valueCostGlass1 ? valueCostGlass1.toFixed(2) : "";
  const valueCostGlass2 = valueCostGlass1 ? valueCostGlass1 * 1.1 : 0;
  costGlass2.textContent = valueCostGlass2 ? valueCostGlass2.toFixed(2) : "";
  priceMDFField.textContent = mdfField.value;
  const valueCostMDF1 = area && mdfField.value ? area * Number(mdfField.value) : 0;
  costMDF1.textContent = valueCostMDF1 ? valueCostMDF1.toFixed(2) : "";
  const valueCostMDF2 = valueCostMDF1 ? valueCostMDF1 * 1.1 : 0;
  costMDF2.textContent = valueCostMDF2 ? valueCostMDF2.toFixed(2) : "";
  priceWorkField.textContent = workField.value;
  const valueCostWork1 = workField.value ? Number(workField.value) : 0;
  costWork1.textContent = valueCostWork1 ? valueCostWork1.toFixed(2) : "";
  const valueCostWork2 = valueCostWork1 ? valueCostWork1 * 1.1 : 0;
  costWork2.textContent = valueCostWork2 ? valueCostWork2.toFixed(2) : "";
  priceHangerField.textContent = hangerField.value;
  const valueCostHanger1 = hangerField.value ? Number(hangerField.value) : 0;
  costHanger1.textContent = valueCostHanger1 ? valueCostHanger1.toFixed(2) : "";
  const valueCostHanger2 = valueCostHanger1 ? valueCostHanger1 * 1.1 : 0;
  costHanger2.textContent = valueCostHanger2 ? valueCostHanger2.toFixed(2) : "";
  together.textContent = ((valueCostBaguette2 || 0) + (valueCostGlass2 || 0) + (valueCostMDF2 || 0) + (valueCostWork2 || 0) + (valueCostHanger2 || 0)).toFixed(2);
}

