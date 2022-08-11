export const loginAction = (dispatch: (arg0: { type: string; payload: string }) => void) => {
    dispatch({
        type: 'USER_LOGIN',
        payload: 'authentication'
    });
};
