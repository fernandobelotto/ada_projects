import { createAsyncThunk } from "@reduxjs/toolkit";

import { SessionApi } from "../../api/session.api";
import type { Login } from "../../models/login.model";

export const login = createAsyncThunk("session/login", async (login: Login) =>
  SessionApi.login(login)
);
