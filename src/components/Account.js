import React from 'react';
import { VscAccount } from "react-icons/vsc";

import '../css/Account.css';

const Account = () => {
    return (
        <div className="account">
            <VscAccount />
            <i>Sign in/Register</i>
        </div>
        
    )
};

export default Account;