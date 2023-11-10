import { dataCheckboxes } from "../mocks/checkboxes";
import { IAllCheckBoxes } from "../interfaces/IAllCheckboxes";
import React, { useState, useEffect } from "react";

type TCheckboxes = string[];

export function useCheckboxes() {
  const [checkboxparagraph, setcheckboxparagraph] =
    useState<IAllCheckBoxes>(dataCheckboxes);

  if (!checkboxparagraph) {
    return null;
  }
  const title = checkboxparagraph.checkboxTitle
  return { title };
}
