import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexPartService {
  private label: string;
  private type: null;
  private tag: string;
  private regExStr: null;
  private regExFlags: null;
  private regex: null;
  private result: any[];
  private hasError: boolean;
  private section: null;

  constructor({obj}: { obj: any }) {
    this.label = '';
    this.type = null;
    this.tag = '';
    this.regExStr = null;
    this.regExFlags = null;
    this.regex = null;
    this.result = [];
    this.hasError = false;
    this.section = null;
    if (obj) {
      if (obj.label) {
        this.label = obj.label;
      }
      if (obj.regex) {
        this.regex = obj.regex;
      }
      if (obj.result) {
        this.result = obj.result;
      }
      if (obj.hasError) {
        this.hasError = obj.hasError;
      }
      if (obj.section) {
        this.section = obj.section;
      }
      if (obj.type) {
        this.type = obj.type;
      }
      if (obj.tag) {
        this.tag = obj.tag;
      }
    }
  }
}
