export interface sendUnsignedDocReqDto {
  doc: string | void;
  nationalId: string;
  phoneNumber: string;
}

export interface sendUnsignedDocResDto {
  gatewayLink: string;
}

export interface receiveSignedDocReqDto {
  trackId: string;
}

export interface receiveSignedDocResDto {
  doc: string;
}
