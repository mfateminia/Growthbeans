<?php

include('db_connection.php');

  $query =  "SELECT gb_interview_videos.title, gb_interview_videos.thumbnail, gb_interview_videos.link FROM gb_interview_videos INNER JOIN gb_interview_professions ON gb_interview_professions.id = gb_interview_videos.id_profession WHERE  gb_interview_professions.category = '{$_GET['category']}' AND gb_interview_professions.title = '{$_GET['title']}'";
  $result = mysqli_query($conn, $query);

  $rows = array();
  while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $rows[] = $row;
  }

  echo json_encode($rows);
  mysqli_close($conn);
