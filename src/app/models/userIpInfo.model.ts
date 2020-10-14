export class IpInfo {
  constructor(
    private _ipAddress: string,
    private _city: string,
    private _region: string,
    private _postalCode: string,
    private _latitude: number,
    private _longitude: number,
    private _timezone: string,
    private _isp: string
  ) {}

  public get ipAddress(): string {
    return this._ipAddress;
  }
  public get city(): string {
    return this._city;
  }
  public get region(): string {
    return this._region;
  }

  public get postalCode(): string {
    return this._postalCode;
  }
  public get latitude(): number {
    return this._latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public get timezone(): string {
    return this._timezone;
  }
  public get isp(): string {
    return this._isp;
  }
}
