import type { LocaleMessages, VueMessageType } from "vue-i18n";

const messages: LocaleMessages<VueMessageType> = {
  common: {
    productName: "Blueprint CRM",
  },
  validation: {
    //
  },
  auth: {
    createYourAccount: "Create your account",
    itsFreeNoCreditCartNeeded: "It's free. No credit card needed",
    signupWithGoogle: "Sign up with Google",
    signupWithFacebook: "Sign up with Facebook",
    google: "Google",
    googleProfileIsAlreadyAssociatedWithAndAccount:
      "Google profile is already associated with an account",
    facebookProfileIsAlreadyAssociatedWithAndAccount:
      "Facebook profile is already associated with an account",
    facebook: "Facebook",
    or: "Or",
    termsAndConditionsAgreement: "By signing up you agree to our {0} and {1}",
    termsOfService: "Terms of Services",
    privacyPolicy: "Privacy Policy",
    "haveAnAccount?": "Have an account? {0}",
    logIn: "Log In",
    logInToTheApp: "Log In to the App",
    createMyAccount: "Create my account",
    greetings: "Hey {name}!",
    firstName: "First name",
    lastName: "Last name",
    emailAddress: "Email Address",
    password: "Password",
    atLeast8Characters: "at least 8 characters",
    oneLowercaseCharacter: "1 lowercase character",
    oneUppercaseCharacter: "1 Uppercase character",
    atLeastOneNumber: "at least 1 number",
    atLeastOneSymbol: "at least 1 symbol",
    passwordMustContainAtLeastOneSymbol:
      "Password must contain at least 1 symbol",
    passwordMustContainAtLeastOneNumber:
      "Password must contain at least 1 number",
    passwordMustContainOneUppercaseCharacter:
      "Password must contain 1 Uppercase character",
    passwordMustContainOneLowercaseCharacter:
      "Password must contain 1 lowercase character",
    passwordMustContainAtLeast8Characters:
      "Password must contain at least 8 characters",
    loginToYourAccount: "Log in to your account",
    logInWithGoogle: "Log in with Google",
    logInWithFacebook: "Login with Facebook",
    "dontHaveAnAccount?": "Don't have an account?",
    signUp: "Sign Up",
    rememberMe: "Remember Me",
    forgotMyPassword: "Forgot my password",
    twoFactorAuthentication: "Two factor authentication",
    yourAccountIsSecuredWithASecondAuthenticationMethod:
      "Your account is secured with a second authentication method",
    getTheSixDigitCodeFromYourMobileApplication:
      "Get the 6-digit code from your mobile application",
    enterYourRecoveryCode: "Enter your recovery code!",
    pleaseEnterTheRecoveryCodeYouSavedWhileSecuringYourAccount:
      "Please enter the recovery code you saved while securing your account",
    oneTimePassword: "One time password",
    otpMustContainOnlyNumbers: "OTP must container only numbers",
    continue: "Continue",
    ifYouAreUnableToAccessToYourDeviceUseYour:
      "If you are unable to access to your device use your {0}",
    recoveryCode: "recovery code",
    RecoveryCode: "Recovery code",
    invalidOrExpiredOtpEntered: "Invalid or expired OTP entered",
    doNotAskAgainOnThisDeviceForThirtyDays:
      "Do not ask again on this device for 30 days",
    resetYourPassword: "Reset your password",
    enterYourEmailAddressToResetYourPassword:
      "Enter your email address to reset your password",
    resetPassword: "Reset password",
    checkYourEmailForThePasswordResetLink:
      "Check your email for the password reset link",
    failedToSendPasswordResetLink: "Failed to send password reset link",
    passwordConfirmationDoesNotMatch: "Password confirmation does not match",
    setYourNewPassword: "Set your new password",
    confirmPassword: "Confirm password",
    failedToResetPassword: " Failed to reset password",
    "passwordChanged!": "Password changed!",
    yourPasswordHasBeenChangedSuccessfully:
      "Your password has been changed successfully.",
    "tryToKeepThisOneInMind!": "Try to keep this one in mind!",
    inCaseYouLostYourRecoveryCodeContactOurSupportTeam:
      "In case you lost your recovery code contact our support team",
    invalidOtpRecoveryCodeEntered: "Invalid OTP recovery code entered",
    "didNotReceiveAnEmail?": "Didn't receive an email?",
    resendVerificationLink: "Resend email verification link!",
    emailVerification: "Email Verification",
    letsVerifyYorEmailAddress: "Let's verify yor email address",
    verifyMyEmail: "Verify my email",
    waitingUntilYourEmailIsVerified: "Waiting until your email is verified...",
    continueAnyway: "Continue anyway",
    illDoItLater: "I'll do later",
    checkYourEmailForTheVerificationLink:
      "Check your email for the verification link",
    weHaveRecentlySentYouTheVerificationLink:
      "We have recently sent you the verification link!",
    goToTheApp: "Go to the app",
    "accountVerified!": "Account Verified!",
    wellDoneYouHaveSuccessfullyVerifiedYourEmailAddress:
      "Well done! You have successfully verified your {0} email address!",
    emailVerificationWentWrong: "Email Verification went wrong!",
    thisVerificationLinkSentToIsEitherInvalidOrHasExpired:
      "This verification link sent to {0} is either invalid or has expired!",
    theEmailIsSuccessfullyVerified:
      "The {0} email address is successfully verified!",
    letsProtectYourAccountFromPasswordBreaches:
      "Let's protect your account from password breaches!",
    secureMyAccount: "Secure my account",
    remindMeLater: "Remind me later",
    inCaseYouLoseYourDevice: "In case you lose your device!",
    inCaseOfEmergencyYouCanUseThisRecoveryCodeToHaveAccessToYourAccount:
      "In case of emergency you can use this recovery code to have access to your account",
    beSureToKeepThisRecoveryKeyInASafePlace:
      "Be sure to keep this recovery key in a safe place",
    recoveryCodeCopiedToClipboard: "Recovery code copied to clipboard!",
    letsKeepYourAccountSecure: "Let's keep your account secure",
    installGoogleAuthenticatorAppOnYourMobilePhone:
      "Install {0} on your mobile phone",
    googleAuthenticatorApp: "Google Authenticator App",
    scanTheQrCodeBelowWithYourMobileApp:
      "Scan the QR code below with your mobile app",
    enterTheSixDigitCodeFromTheAppOnceTheScanIsComplete:
      "Enter the 6-digit code from the app once the scan is complete",
  },
};

export default messages;
