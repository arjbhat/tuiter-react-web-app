import ArrayIndexAndLength from "./array-index-and-length";
import AddAndRemoveDataToArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
  console.log('Working with Arrays');
  var functionScoped = 2;
  console.log(functionScoped)
  let blockScoped = 5;
  console.log(blockScoped)
  const constant1 = functionScoped - blockScoped;
  console.log(constant1)
  let numberArray1 = [1, 2, 3, 4, 5];
  console.log(numberArray1)
  let stringArray1 = ['string1', 'string2'];
  console.log(stringArray1)

  let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
  ];
  console.log(variableArray1)

  return (
    <>
      <h3>Working with Arrays</h3>
      numberArray1 = {numberArray1}<br />
      stringArray1 = {stringArray1}<br />
      variableArray1 = {variableArray1}<br />
      <ArrayIndexAndLength />
      <AddAndRemoveDataToArrays />
      <ForLoops />
      <MapFunction />
      <JSONStringify />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
    </>
  );
}

export default WorkingWithArrays;