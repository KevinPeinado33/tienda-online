export interface ImageResponse {
    data:    DataImage;
    success: boolean;
    status:  number;
}

export interface DataImage {
    id:          string;
    title:       string;
    url_viewer:  string;
    url:         string;
    display_url: string;
    size:        number;
    time:        string;
    expiration:  string;
    image:       Image;
    thumb:       Thumb;
    mediumn:     Medium;
    delete_url:  string;
}

export interface Image {
    filename:  string;
    name:      string;
    mime:      string;
    extension: string;
    url:       string;
}

export interface Thumb {
    filename:  string;
    name:      string;
    mime:      string;
    extension: string;
    url:       string;
}

export interface Medium {
    filename:  string;
    name:      string;
    mime:      string;
    extension: string;
    url:       string;
}
