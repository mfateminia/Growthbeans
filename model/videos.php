<?php
include 'model/db_connection.php';

function getData($request_profession, $request_job){
  $query = "SELECT gb_interview_videos.title, gb_interview_videos.thumbnail, gb_interview_videos.link
            FROM gb_interview_videos
            INNER JOIN gb_interview_professions ON gb_interview_professions.id = gb_interview_videos.id_profession
            WHERE  gb_interview_professions.category = {$request_profession} AND gb_interview_professions.title = {$request_job}";

  $result = mysql_query($conn, $query);

  while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
      printf("ID: %s  Name: %s", $row["id"], $row["name"];
  }
}
