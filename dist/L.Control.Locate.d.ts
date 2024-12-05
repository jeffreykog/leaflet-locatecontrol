import { Control, Layer, Map, ControlOptions, PathOptions, MarkerOptions, LocationEvent, LatLngBounds } from "leaflet";

export type SetView = false | 'once' | 'always' | 'untilPan' | 'untilPanOrZoom';

export interface StringsOptions {
  title?: string | undefined;
  metersUnit?: string | undefined;
  feetUnit?: string | undefined;
  popup?: string | undefined;
  outsideMapBoundsMsg?: string | undefined;
}

export interface LocateOptions extends ControlOptions {
  layer?: Layer | undefined;
  setView?: SetView | undefined;
  keepCurrentZoomLevel?: boolean | undefined;
  initialZoomLevel?: number | boolean | undefined;
  getLocationBounds?: ((locationEvent: LocationEvent) => LatLngBounds) | undefined;
  flyTo?: boolean | undefined;
  clickBehavior?: any;
  returnToPrevBounds?: boolean | undefined;
  cacheLocation?: boolean | undefined;
  drawCircle?: boolean | undefined;
  drawMarker?: boolean | undefined;
  showCompass?: boolean | undefined;
  markerClass?: any;
  compassClass?: any;
  circleStyle?: PathOptions | undefined;
  markerStyle?: PathOptions | MarkerOptions | undefined;
  compassStyle?: PathOptions | undefined;
  followCircleStyle?: PathOptions | undefined;
  followMarkerStyle?: PathOptions | undefined;
  icon?: string | undefined;
  iconLoading?: string | undefined;
  iconElementTag?: string | undefined;
  textElementTag?: string | undefined;
  circlePadding?: number[] | undefined;
  metric?: boolean | undefined;
  createButtonCallback?: ((container: HTMLDivElement, options: LocateOptions) => { link: HTMLAnchorElement; icon: HTMLElement }) | undefined;
  onLocationError?: ((event: ErrorEvent, control: LocateControl) => void) | undefined;
  onLocationOutsideMapBounds?: ((control: LocateControl) => void) | undefined;
  showPopup?: boolean | undefined;
  strings?: StringsOptions | undefined;
  locateOptions?: L.LocateOptions | undefined;
}

export class LocateControl extends Control {
  constructor(locateOptions?: LocateOptions);

  onAdd(map: Map): HTMLElement;

  start(): void;

  stop(): void;

  stopFollowing(): void;

  setView(): void;
}
