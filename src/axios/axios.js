import axios from "axios";

const base = "http://101.33.235.27:8000";

export default axios.create({ baseURL: base });
