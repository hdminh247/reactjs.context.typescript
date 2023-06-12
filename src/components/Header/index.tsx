import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context";

import PATH from "../../constants/route";

const { LOGIN } = PATH;

export default function Header() {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <div className={"header"}>
      <div className="container">
        <a onClick={() => {}}>
          <img alt={"logo"} src="/images/logo.png" className="logo" width="170" height="49" />
        </a>
        {user && (
          <div className="float--right">
            <ul className="">
              <li className="">
                <a className="call-button" href="tel:+1-800-870-1399">
                  <img className="mr-8" src="/images/phone.png" alt="" /> 1-800-870-1399
                </a>
              </li>
            </ul>
          </div>
        )}
        {!user && (
          <>
            <a
              className="login"
              onClick={() => {
                navigate(LOGIN);
              }}
            >
              <img alt={"login"} src="/images/login-ic.png" /> Login
            </a>
          </>
        )}
      </div>
      {/*<div*/}
      {/*  className={"header__logo cursor-pointer"}*/}
      {/*  onClick={() => {*/}
      {/*    if (status === AuthState.authenticated) {*/}
      {/*      if (isAdmin(user?.role)) {*/}
      {/*        navigate(PATH.ADMIN_USERS);*/}
      {/*      } else {*/}
      {/*        navigate(PATH.DASHBOARD);*/}
      {/*      }*/}
      {/*    } else {*/}
      {/*      navigate(PATH.LOGIN);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*>*/}
      {/*  LOGO*/}
      {/*</div>*/}
      {/*<div className={"header__navigation-list"}>*/}
      {/*  {!user && (*/}
      {/*    <>*/}
      {/*      <Button*/}
      {/*        type="primary"*/}
      {/*        className={"submit-btn mr-16"}*/}
      {/*        onClick={() => {*/}
      {/*          navigate(NEW_APPLICATION);*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        Start Application*/}
      {/*      </Button>*/}
      {/*      <Button*/}
      {/*        className={"submit-btn"}*/}
      {/*        onClick={() => {*/}
      {/*          navigate(LOGIN);*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        Login*/}
      {/*      </Button>*/}
      {/*    </>*/}
      {/*  )}*/}

      {/*  {user &&*/}
      {/*    user.role?.name === "User" &&*/}
      {/*    navigationItems.map((item, index) => {*/}
      {/*      return (*/}
      {/*        <div*/}
      {/*          key={index}*/}
      {/*          onClick={() => {*/}
      {/*            navigate(item.path);*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          {item.name}*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}

      {/*{user && <ProfileMenu />}*/}
      {/*</div>*/}
    </div>
  );
}
