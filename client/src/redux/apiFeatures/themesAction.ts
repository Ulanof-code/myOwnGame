import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { ThemeType } from '../../../types';

const getThemesThunkAction = createAsyncThunk('themes/fetch', async()=> 
axios<ThemeType[]>('api/themes')
.then((res)=> res.data)
.catch((err)=> console.log(err)
)
)
export default getThemesThunkAction
