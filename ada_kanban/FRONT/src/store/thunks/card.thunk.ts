import { createAsyncThunk } from "@reduxjs/toolkit";

import { CardApi } from "../../api/card.api";
import type { CardModel } from "../../models/card.model";

export const createCard = createAsyncThunk(
  "card/createCard",
  async (card: CardModel) => CardApi.create(card)
);

interface updateProps {
  id: string;
  card: CardModel;
}
export const updateCard = createAsyncThunk(
  "card/updateCard",
  async ({ id, card }: updateProps) => CardApi.updateById(id, card)
);

export const getCards = createAsyncThunk("card/getCards", async () =>
  CardApi.fetch()
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async (id: string) => CardApi.deleteById(id)
);
