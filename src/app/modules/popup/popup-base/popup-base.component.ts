import { Component, Inject, OnInit } from "@angular/core";
import { BehaviorSubject, bindCallback } from "rxjs";
import { map } from "rxjs/operators";
import { TAB_ID } from "src/app/providers/tab-id.provider";

@Component({
	selector: "app-popup-base",
	templateUrl: "./popup-base.component.html",
	styleUrls: ["./popup-base.component.scss"],
})
export class PopupBaseComponent implements OnInit {
	private authorizedSubject = new BehaviorSubject<boolean>(true);
	readonly authorized$ = this.authorizedSubject.asObservable();

	message: string = "";

	constructor(@Inject(TAB_ID) readonly tabId: number) {}

	ngOnInit(): void {}

	openOptionsPage(): void {
		chrome.runtime.openOptionsPage();
	}

	// async onClick(): Promise<void> {
	//   this.message = await bindCallback<string>(chrome.tabs.sendMessage.bind(this, this.tabId, 'request'))()
	//     .pipe(
	//       map(msg =>
	//         chrome.runtime.lastError
	//           ? 'The current page is protected by the browser, goto: https://www.google.nl and try again.'
	//           : msg
	//       )
	//     )
	//     .toPromise();
	// }
}
