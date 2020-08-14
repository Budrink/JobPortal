import { http } from '../Data/Http';

export interface AccountSettings {
  publicProfile: boolean;
  sharePhoto: boolean;
  showFeedback: boolean;
  profileSearchible: boolean;
  disableAccount: boolean;
  disableTemporarily: boolean;
  language: string;
  currency: string;
  sendWeeklyAlerts: boolean;
  sendBonusAlearts: boolean;
  forwardMessages: boolean;
  shareSecurityAlerts: boolean;
  detailPageDesign: boolean;
  newPassowrd: boolean;
}

export const PostAccountSettings = async (
  accountSettings: AccountSettings,
): Promise<any> => {
  let requestBody;
  requestBody = {
    userId: localStorage.getItem('userId'),
    publicProfile: accountSettings.publicProfile,
    sharePhoto: accountSettings.sharePhoto,
    showFeedback: accountSettings.showFeedback,
    profileSearchible: accountSettings.profileSearchible,
    disableAccount: accountSettings.disableAccount,
    disableTemporarily: accountSettings.disableTemporarily,
    language: accountSettings.language,
    currency: accountSettings.currency,
    sendWeeklyAlerts: accountSettings.sendWeeklyAlerts,
    sendBonusAlearts: accountSettings.sendBonusAlearts,
    forwardMessages: accountSettings.forwardMessages,
    shareSecurityAlerts: accountSettings.shareSecurityAlerts,
    detailPageDesign: accountSettings.detailPageDesign,
    newPassowrd: accountSettings.newPassowrd,
  };
  // console.log(requestBody);
  try {
    let response: any;
    response = await http({
      path: `accountsettings`,
      method: 'POST',
      body: requestBody,
    });
    return response.parsedBody;
  } catch (error) {
    window.alert(error);
    return error;
  }
};
