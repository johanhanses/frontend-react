import httpService from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/reports";

function reportUrl(id) {
    return `${apiEndPoint}/week/${id}`;
}

export function getMovies() {
    return httpService.get(apiEndPoint);
}

export function getReport(reportId) {
    return httpService.get(reportUrl(reportId));
}
// not done yet
export function saveReport(report) {
    if (report.id) {
        const body = { ...report };
        delete body.id;
        console.log(body);

        return httpService.put(`${apiEndPoint}/${report.id}`, body,
        {
            headers: {
                'x-access-token': localStorage.getItem("token")
            }
        }
        );
    }
    return httpService.post(apiEndPoint, {
        week: report.week,
        writer: report.writer,
        report: report.report
    },
    {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    }
    );
}
//
export function deleteReport(reportId) {
    return httpService.delete(reportUrl(reportId));
}