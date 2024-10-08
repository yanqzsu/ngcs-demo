import { Component } from '@angular/core';
import { ImageInfo, RequestSchema, ToolEnum } from 'ng-cornerstone';
import { Enums } from '@cornerstonejs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // imageInfo: ImageInfo = {
  //   studyInstanceUID: '1.2.392.200055.5.4.80861305518.20150928153455671288',
  //   seriesInstanceUID:
  //     '1.2.392.200036.9142.10002202.1020869001.2.20150928174647.30151',
  //   // urlRoot: 'http://10.81.20.156:8080/dicom-web',
  //   urlRoot:
  //     'http://10.81.20.156:8080/segment/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Images/ABD_LYMPH_006.nii.gz',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Images/ABD_LYMPH_006.nii.gz',
  //   // urlRoot: 'http://10.81.20.156:8080/referenceT1.nii',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Images/ABD_LYMPH_006.nii',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Labels/20231211-035637/ABD_LYMPH_006.nii',
  //   viewportType: Enums.ViewportType.VOLUME_3D,
  //   schema: RequestSchema.nifti,
  // };
  imageInfo: ImageInfo = {
    urlRoot: 'https://d3t6nz73ql33tx.cloudfront.net/dicomweb',
    studyInstanceUID:
      '1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463',
    seriesInstanceUID:
      '1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561',
    viewportType: Enums.ViewportType.ORTHOGRAPHIC,
    schema: RequestSchema.wadoRs,
  };
  // segmentInfo: ImageInfo = {
  //   studyInstanceUID: '1.2.392.200055.5.4.80861305518.22222',
  //   seriesInstanceUID:
  //     '1.2.392.200036.9142.10002202.1020869001.2.20150928174647.30151',
  //   // urlRoot: 'http://10.81.20.156:8080/dicom-web',
  //   urlRoot:
  //     'http://10.81.20.156:8080/segment/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Labels/20231211-035637/ABD_LYMPH_006.nii.gz',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Images/ABD_LYMPH_006.nii.gz',
  //   // urlRoot: 'http://10.81.20.156:8080/referenceT1.nii',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Images/ABD_LYMPH_006.nii',
  //   // urlRoot:
  //   //   'http://10.81.20.156:8080/ABD_LYMPH_006/fe0ace7a-b70a-43bc-9eb0-52359b4d2241/Labels/20231211-035637/ABD_LYMPH_006.nii',
  //   viewportType: Enums.ViewportType.VOLUME_3D,
  //   schema: RequestSchema.nifti,
  //   segmentType: csToolEnum.SegmentationRepresentations.Labelmap,
  // };
  toolList = [
    ToolEnum.AngleTool,
    ToolEnum.ArrowAnnotateTool,
    ToolEnum.EllipticalROITool,
    ToolEnum.LengthTool,
    ToolEnum.PanTool,
    ToolEnum.RectangleROITool,
    ToolEnum.StackScrollTool,
    ToolEnum.TrackballRotateTool,
    ToolEnum.WindowLevelTool,
    ToolEnum.ZoomTool,
    ToolEnum.FlipV,
    ToolEnum.FlipH,
    ToolEnum.Rotate,
    ToolEnum.Next,
    ToolEnum.Previous,
    ToolEnum.Coronal,
    ToolEnum.Axial,
    ToolEnum.Sagittal,
  ];
}
