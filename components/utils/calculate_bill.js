// utils/calculateBill.js

// 🔥 Slab calculation
export function calculateSlab(units) {
  console.log("👉 ORIGINAL UNITS:", units);

  let remaining = units;   // ✅ use separate variable
  let cost = 0;

  // slab 1
  if (remaining <= 50) {
    cost += remaining * 3;
    console.log("slab1");
    return cost;
  } else {
    cost += 50 * 3;
    remaining -= 50;
  }

  // slab 2
  if (remaining <= 50) {
    cost += remaining * 4.5;
    console.log('slab2');
    return cost;
  } else {
    cost += 50 * 4.5;
    remaining -= 50;
  }

  // slab 3
  if (remaining > 0) {
    cost += remaining * 5.8;
  }

  console.log("👉 FINAL COST:", cost);

  return cost;
}
// 🔥 Final bill calculation
export function calculateFinalBill({
  totalUnits,
  subsidyUnits,
  pricePerUnit,
  extraChargePerUnit,
  fixedCharges,
}) 
{
  // ✅ remove subsidy
  const chargeableUnits = Math.max(totalUnits - subsidyUnits, 0);


  // ✅ slab energy cost
  const energyCost = calculateSlab(chargeableUnits);

  // ✅ extra charges
  const extraCost = chargeableUnits * extraChargePerUnit;

  // ✅ final bill
  const finalBill = energyCost + extraCost + fixedCharges;

  return {
    chargeableUnits,
    energyCost,
    extraCost,
    totalUnits,
    pricePerUnit,
    fixedCharges,
    finalBill,
  };
}