webpackHotUpdate(0,{

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label text=\"Home\"></Label>\r\n</ActionBar>\r\n<ScrollView orientation=\"vertical\">\r\n    <GridLayout class=\"m-15\">\r\n        <StackLayout class=\"p-20\">\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Asset Worth\" />\r\n                    <Label class=\"assetWorth\" text=\"$ 450.00,00\" />\r\n                    <GridLayout columns=\"*,*\" rows=\"*,*\" class=\"m-15\">\r\n\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Stored\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Miss\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Maintenance\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Lend\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n\r\n            </Card:CardView>\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Graph\" class=\"m-b-10\" />\r\n\r\n                </StackLayout>\r\n            </Card:CardView>\r\n            <GridLayout rows=\"*, *\" tkExampleTitle tkToggleNavButton>\r\n                <RadPieChart allowAnimation=\"true\" row=\"0\">\r\n                    <PieSeries tkPieSeries selectionMode=\"DataPoint\" expandRadius=\"0.4\" outerRadiusFactor=\"0.7\" valueProperty=\"amount\" legendLabel=\"brand\" [items]=\"pieSource\">\r\n                    </PieSeries>\r\n\r\n                    <RadLegendView tkPieLegend position=\"Right\" title=\"Brands\" offsetOrigin=\"TopRight\" width=\"110\" enableSelection=\"true\"></RadLegendView>\r\n                </RadPieChart>\r\n            </GridLayout>\r\n        </StackLayout>\r\n    </GridLayout>\r\n\r\n</ScrollView>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNHJIIiwiZmlsZSI6IjAuM2QxMDA1ZTUzNDQ0OGE3OWQzZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcclxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxyXFxuICAgIC0tPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXHJcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcclxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxyXFxuICAgIC0tPlxcclxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxyXFxuICAgIDwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcIm0tMTVcXFwiPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIj5cXHJcXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjMwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgV29ydGhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImFzc2V0V29ydGhcXFwiIHRleHQ9XFxcIiQgNDUwLjAwLDAwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwqXFxcIiByb3dzPVxcXCIqLCpcXFwiIGNsYXNzPVxcXCJtLTE1XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIlN0b3JlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgY29sPVxcXCIxXFxcIiByb3c9XFxcIjBcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiMTBcXFwiIHJhZGl1cz1cXFwiNDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic3R1ZmZGb250XFxcIiB0ZXh0PVxcXCJNaXNzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIk1haW50ZW5hbmNlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIkxlbmRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjMwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiR3JhcGhcXFwiIGNsYXNzPVxcXCJtLWItMTBcXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosICpcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8UmFkUGllQ2hhcnQgYWxsb3dBbmltYXRpb249XFxcInRydWVcXFwiIHJvdz1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8UGllU2VyaWVzIHRrUGllU2VyaWVzIHNlbGVjdGlvbk1vZGU9XFxcIkRhdGFQb2ludFxcXCIgZXhwYW5kUmFkaXVzPVxcXCIwLjRcXFwiIG91dGVyUmFkaXVzRmFjdG9yPVxcXCIwLjdcXFwiIHZhbHVlUHJvcGVydHk9XFxcImFtb3VudFxcXCIgbGVnZW5kTGFiZWw9XFxcImJyYW5kXFxcIiBbaXRlbXNdPVxcXCJwaWVTb3VyY2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9QaWVTZXJpZXM+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8UmFkTGVnZW5kVmlldyB0a1BpZUxlZ2VuZCBwb3NpdGlvbj1cXFwiUmlnaHRcXFwiIHRpdGxlPVxcXCJCcmFuZHNcXFwiIG9mZnNldE9yaWdpbj1cXFwiVG9wUmlnaHRcXFwiIHdpZHRoPVxcXCIxMTBcXFwiIGVuYWJsZVNlbGVjdGlvbj1cXFwidHJ1ZVxcXCI+PC9SYWRMZWdlbmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICA8L1JhZFBpZUNoYXJ0PlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG48L1Njcm9sbFZpZXc+XCIiXSwic291cmNlUm9vdCI6IiJ9