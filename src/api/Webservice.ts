import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource,
  } from "axios";
import { RequestType } from "./WebserviceEnum";
  
  export default class WebService  {
    public apiUrl: string = 'https://asia-south1-socialape-b910e.cloudfunctions.net/api'
     
    public extraHeaders: Map<string, string> = new Map<string, string>();
    
    public async makeGetRequest<T>(
      path: string,
      data?: object,
      cancelToken?: CancelTokenSource
    ): Promise<AxiosResponse<T>> {
      return await this.makeWebCall<T>(
        path,
        RequestType.GET,
        data,
        false,
        cancelToken
      );
    }
  
    public async makePostRequest<T>(
      path: string,
      data?: object | any,
      isJsonRequest: boolean = true,
      isXMLResponse: boolean = false,
      isOutputJson: boolean = false
    ): Promise<AxiosResponse<T>> {
      //console.log('boolean value', isOutputJson);
      return await this.makeWebCall<T>(
        path,
        RequestType.POST,
        data,
        isJsonRequest,
        undefined,
        isXMLResponse,
        isOutputJson
      );
    }
  
    public async makePutRequest<T>(
      path: string,
      data?: object,
      isJsonRequest: boolean = true
    ): Promise<AxiosResponse<T>> {
      return await this.makeWebCall<T>(
        path,
        RequestType.PUT,
        data,
        isJsonRequest,
        undefined
      );
    }
  
    public async makeDeleteRequest<T>(
      path: string,
      data?: object,
      cancelToken?: CancelTokenSource
    ): Promise<AxiosResponse<T>> {
      return await this.makeWebCall<T>(
        path,
        RequestType.DELETE,
        data,
        false,
        cancelToken
      );
    }
  
    private async makeWebCall<T>(
      path: string,
      requestType: RequestType,
      data?: object,
      isJsonRequest: boolean = true,
      cancelToken?: CancelTokenSource,
      isXMLResponse: boolean = false,
      isOutputJson: boolean = false
    ): Promise<AxiosResponse<T>> {
     // const token = await OAuthManager.getInstance().loadOAuthToken();
  
      const fullUrl = `${this.apiUrl}${path}`;
      const request =
        requestType === RequestType.GET
          ? this.buildGetRequest(fullUrl, data)
          : this.buildPostRequest(
              fullUrl,
              data,
             
            );
  
      const headers = new Map<string, string>();
     // headers.set("Authorization", `Bearer ${token}`);
      headers.set("HostSite", "US");
      this.extraHeaders.forEach((value, key) => {
        headers.set(key, value);
      });
      //request.headers = convertMapToObject(headers);
      request.cancelToken = cancelToken == null ? undefined : cancelToken.token;
  
      //Todo: old code to used if new code fails
      // //console.log('web service request -->', request);
       const response = await axios.request<T>(request);
      // //console.log('web service request -->', { request: request, response: response });
       return response;
  
    }
  
    public async makeExternalWebCall<T>(
      path: string,
      requestType: RequestType,
      data?: object,
      isJsonRequest: boolean = true,
      cancelToken?: CancelTokenSource
    ): Promise<AxiosResponse<T>> {
      const fullUrl = `${path}`;
      const request =
        requestType === RequestType.GET
          ? this.buildGetRequest(fullUrl, data)
          : this.buildPostRequest(fullUrl, data);
  
      const headers = new Map<string, string>();
      this.extraHeaders.forEach((value, key) => {
        headers.set(key, value);
      });
     // request.headers = convertMapToObject(headers);
      request.cancelToken = cancelToken == null ? undefined : cancelToken.token;
      return await axios.request<T>(request);
    }
  
    private buildGetRequest(baseUrl: string, data?: object): AxiosRequestConfig {
    //  const developerKeyParameter = `?DeveloperKey=${this.developerKey}`;
      const url =
        data != null
          ? `${baseUrl}&${data}`
          : `${baseUrl}`;
      const request: AxiosRequestConfig = {
        method: RequestType.GET,
        url,
      };
      return request;
    }
  
    
  
    
  
    private buildPostRequest(
      baseUrl: string,
      data?: object,
     
    ): AxiosRequestConfig {
    
     
      const url = `${baseUrl}`;
      const request: AxiosRequestConfig = {
        method: RequestType.POST,
        url,
      };
      data != null 
          ? (request.data = data): null
         
      return request;
    }
  }
  