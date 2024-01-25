import { SIGN_UP_ERROR, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, USERLOGINREQ, USERLOGINRES, USERLOGINREJ, LOGOUTREQ, LOGOUTRES, LOGOUTREJ, GOOGLELOGINREQ, GOOGLELOGINREJ, GOOGLELOGINRES } from '../const';

const initialState = {
  isLoading: false,
  isSignUp: false,
  isLogin: false,
  user: null,
  err: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignUp: true,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        isSignUp: false,
        err: "something went wrong",
      };
    case USERLOGINREQ:
      return {
        ...state,
        isLoading: true,
      };
    case USERLOGINRES:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
      };
    case USERLOGINREJ:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        err: action.payload,
      };

      case LOGOUTREQ:
        return{
          ...state,
          isLoading:true,
        }
        case LOGOUTRES:
          return{
            ...state,
            isLoading:false,
            user:null,
            isLogin:false,
          }
          case LOGOUTREJ:
            return{
              ...state,
              isLoading:false,
              err: "something went wrong"
            }

            case GOOGLELOGINREQ:
              return {
                ...state,
                loading: true,
                error: null,
              };
        
            case GOOGLELOGINRES:
              return {
                ...state,
                isLogin: true,
                user: action.payload.user,
                isLoading: false,
                err: null,
              };
        
            case GOOGLELOGINREJ:
              return {
                ...state,
                loading: false,
                error: "something went wrong",
              };
        
    default:
      return state;
  }
};

export default authReducer;
