// validation regex
/** password regex */
export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
/** id regex */
export const idRegex = /^(?![0-9]+$)(?=[a-zA-Z0-9]*$)(?=.*[a-zA-Z])(?=.*\d).+$/;
/** nickname regex */
export const nicgkNameRegex = /^(?!\d+$)[a-zA-Z0-9가-힣]+$/;